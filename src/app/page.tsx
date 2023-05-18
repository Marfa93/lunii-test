import Alert from "./components/Alert";
import Form from "./components/Form";

export default function Home() {
  return (
    <>
      <Form />
      <hr className="w-full h-1 mt-12 mb-12 bg-colorHr border-none shadow" />
      <Alert message="L'url saisie est invalide" type="error" />
    </>
  );
}
