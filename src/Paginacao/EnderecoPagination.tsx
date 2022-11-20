import { useContext, useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { EnderecoContext } from "../Context/EnderecoContext";

export const EnderecoPagination = () => {
  const { totalDePaginas, enderecoPagination } = useContext(EnderecoContext);

  const [searchParams] = useSearchParams();
  const numeroPagina = (searchParams.get("page") || "1");

  const pages = useMemo(() => {
    const listaPaginas: number[] = [];
    for (let i = 1; i <= totalDePaginas; i++) {
      listaPaginas.push(i);
    }
    return listaPaginas;
  }, [totalDePaginas]);

  useEffect(() => {
    enderecoPagination(numeroPagina);
    console.log(numeroPagina);
  }, [numeroPagina]);

  return (
    <div>
    {pages.map((item) => (
        <Link key={item} to={`/PaginaEndereco?page=${item}`}>{item}
        </Link>
      ))}
    </div>
  );
};
