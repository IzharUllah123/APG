export default function PaymentReturn() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: "0 0 10px rgba(0,0,0,.1)",
        }}
      >
        <h1>Payment Response</h1>

        <p>
          Bank Alfalah has returned to your website.
        </p>

        <p>
          Here you will verify whether the payment succeeded or failed.
        </p>
      </div>
    </main>
  );
}