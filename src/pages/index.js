import PropTypes from "prop-types";
import MainLayout from "../layouts/main";
import SectionsLayout from "../layouts/sectionsLayout";

const Home = ({ user }) => {
    return (
        <MainLayout>
            <h5>The content goes here</h5>
            <div></div>
        </MainLayout>
    );
};

Home.propTypes = {
    user: PropTypes.object,
};
export default Home;
