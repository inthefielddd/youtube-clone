import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join" });
};
export const postJoin = (req, res) => {
    const {
        body: { name, email, password, password2 },
    } = req;
    if (password !== password2) {
        res.status(400); //잘못된요청
        res.render("join", { pageTitle: "Join" });
    } else {
        //To Do:register user
        //To Do:Log In
        res.redirect(routes.home);
    }
};

export const getLogin = (req, res) => {
    res.render("login", { pageTitle: "Login" });
};

export const postLogin = (req, res) => {
    const {
        body: { email, password },
    } = req;
    res.redirect(routes.home);
};

export const logout = (req, res) => {
    //To Do: Process Log Out
    res.redirect(routes.home);
};

export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "User Detail" });

export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "Edit Profile" });

export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "Change Password" });
