export type BannerTextProps = {
  BannerText: "아이디" | "비밀번호" | "비밀번호 확인" | "닉네임";
};

const Banner = ({ BannerText }: BannerTextProps) => {
  return <span>{BannerText}</span>;
};
export default Banner;
