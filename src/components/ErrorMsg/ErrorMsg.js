import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";

const ErrorMsg = ({ errTitle = "Halaman tidak ditemukan." }) => {
  return (
    <Container className="pb-80">
      <h1 className="mb-40 text-capitalize">{errTitle}</h1>
      <Link href="/product">
        <a className="m-btn m-btn-2">Kembali ke product.</a>
      </Link>
    </Container>
  );
};

export default ErrorMsg;
