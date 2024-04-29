import { RouteObject } from "react-router";
import Home from "~/pages/Home/Home";
import Layout from "~/layout/Layout";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                children: [
                    {
                        path: '',
                        element: <Home />
                    }
                ]
            }
        ]
    }
]

export default routes;