import React, { useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";

const ContactForm = () => {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [object, setObject] = useState("");
  const [request, setRequest] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [csrfToken, setCsrfToken] = useState("");
  const [loading, setLoading] = useState(false);

  /*useEffect(() => {
    axios
      .get("http://localhost:5000/csrf-token", { withCredentials: true })
      .then((response) => setCsrfToken(response.data.csrfToken))
      .catch((err) =>
        console.error("Erreur lors de la récupération du token CSRF :", err)
      );
  }, []);*/

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!title || !email || !object || !request) {
      setError("Tous les champs sont obligatoires.");
      return;
    }

    if (request.length > 1000) {
      alert("Votre demande ne peut pas dépasser 1000 caractères.");
      return;
    }

    const sanitizedTitle = DOMPurify.sanitize(title);
    const sanitizedEmail = DOMPurify.sanitize(email);
    const sanitizedObject = DOMPurify.sanitize(object);
    const sanitizedRequest = DOMPurify.sanitize(request);

    /*try {
      setLoading(true);
      await axios.post(
        "http://localhost:5000/contacts",
        {
          title: sanitizedTitle,
          email_visitor: sanitizedEmail,
          object: sanitizedObject,
          request: sanitizedRequest,
        },
        {
          headers: {
            "X-CSRF-Token": csrfToken,
          },
          withCredentials: true,
        }
      );
      setSuccess("Votre message a été envoyé avec succès !");
      setTitle("");
      setEmail("");
      setObject("");
      setRequest("");
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.");
      console.error("Erreur lors de l'envoi du message :", err);
    } finally {
      setLoading(false);
    }*/
  };

  return (
    <div className="bg-[#E9DECB] pt-14 p-20 rounded-lg shadow-md flex flex-col items-center">
      <h2 className="text-center text-3xl font-jomolhari font-semibold mb-4 text-[#231301]">
        Nous contacter
      </h2>
      {success && <p className="text-green-500 text-center mb-4">{success}</p>}
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-lg">
        <div className="w-full">
          <label
            htmlFor="title"
            className="block text-lg font-jomolhari font-light text-[#231301] mb-2"
          >
            Thème
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 border rounded w-full"
            placeholder="Indiquez le thème"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="email"
            className="block text-lg font-jomolhari font-light text-[#231301] mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border rounded w-full"
            placeholder="Entrez votre email"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="object"
            className="block text-lg font-jomolhari font-light text-[#231301] mb-2"
          >
            Objet
          </label>
          <input
            type="text"
            id="object"
            value={object}
            onChange={(e) => setObject(e.target.value)}
            className="p-2 border rounded w-full"
            placeholder="Entrez l'objet"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="request"
            className="block text-lg font-jomolhari font-light text-[#231301] mb-2"
          >
            Demande
          </label>
          <textarea
            id="request"
            value={request}
            onChange={(e) => setRequest(e.target.value)}
            className="p-2 border rounded w-full"
            placeholder="Entrez votre demande"
            rows="6"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#231301] text-white py-2 rounded-lg hover:bg-[#3e3e3e]"
          disabled={loading}
        >
          {loading ? "Envoi..." : "Envoyez"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
