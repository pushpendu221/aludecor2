export default async function Apicall(path) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_END_POINT}${path}`
  );
  const resdata = await response.json();
  const { data } = await resdata;
  return data;
}
