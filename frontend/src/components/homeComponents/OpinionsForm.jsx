import React, { useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";

const OpinionsForm = () => {
  const [nickname, setNickname] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [csrfToken, setCsrfToken] = useState("");

  /*useEffect(() => {
    axios
      .get("http://localhost:5000/csrf-token", { withCredentials: true })
      .then((response) => setCsrfToken(response.data.csrfToken))
      .catch((err) =>
        console.error("Erreur lors de la récupération du token CSRF :", err)
      );
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!nickname || !comment) {
      setError("Le pseudo et le commentaire sont obligatoires.");
      return;
    }

    if (comment.length > 500) {
      alert("Votre commentaire ne peut pas dépasser 500 caractères.");
      return;
    }

    const sanitizedNickname = DOMPurify.sanitize(nickname);
    const sanitizedComment = DOMPurify.sanitize(comment);

    try {
      setLoading(true); // Active l'état de chargement
      await axios.post(
        "http://localhost:5000/opinions",
        {
          nickname: sanitizedNickname,
          comment: sanitizedComment,
        },
        {
          headers: {
            "X-CSRF-Token": csrfToken,
          },
          withCredentials: true,
        }
      );
      setSuccess("Votre avis a été envoyé avec succès !");
      setNickname("");
      setComment("");
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.");
      console.error("Erreur lors de l'envoi de l'avis :", err);
    } finally {
      setLoading(false); // Désactive l'état de chargement
    }
  };*/

  return (
    <div className="bg-[#E9DECB] pt-14 rounded-lg shadow-md flex flex-col items-center">
      <h2 className="text-center text-3xl font-jomolhari font-semibold mb-4 text-[#231301]">
        Envoyez votre avis
      </h2>
      {success && <p className="text-green-500 text-center mb-4">{success}</p>}
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {/*<form
        onSubmit={handleSubmit}
        className="space-y-4  flex flex-col items-center pb-10"
      >
        <div>
          <label
            htmlFor="nickname"
            className="block text-lg font-jomolhari font-light text-[#231301] w-full"
          >
            Pseudo
          </label>
          <input
            type="text"
            id="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="p-2 border rounded w-full"
            placeholder="Entrez votre pseudo"
          />
        </div>
        <div>
          <label
            htmlFor="comment"
            className="block text-lg font-jomolhari font-light text-[#231301] w-full"
          >
            Commentaire
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="p-2 border rounded w-full text-lg"
            placeholder="Entrez votre avis"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="w-1/2 bg-[#231301] text-white py-2 rounded-lg hover:bg-[#3e3e3e]"
        >
          Envoyer
        </button>
      </form>*/}
    </div>
  );
};

export default OpinionsForm;
