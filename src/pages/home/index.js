import Cover from "../../components/cover";
import AboutUs from "../../components/aboutUs";
import Goals from "../../components/goal";
import CommonQuestions from "../../components/CommonQuestions";
import AllPost from "../../components/news/AllPost";
import { Footer } from "../../components/footer";
import Comments from "../../components/comments";

const Home = (props) => {
  const Reg = () => {
    window.open("https://elselt.huree.edu.mn/register.php", "_blank");
  };
  return (
    <div className="">
      <Cover sideBar={props.sideBar} toggleSideBar={props.toggleSideBar} />
      <AboutUs />
      <Goals />
      <CommonQuestions />
      <Comments />
      <div className="bg-blue-600 h-40 flex justify-center items-center py-10">
        <button
          onClick={Reg}
          className="text-white text-4xl hover:text-[37px] hover:text-gray-200 hover:border-b-[1px]"
        >
          Онлайнаар бүртгүүлэх бол энд дарна уу!
        </button>
      </div>
      <AllPost />
      <Footer />
    </div>
  );
};

export default Home;
