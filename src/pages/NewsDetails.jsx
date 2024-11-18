import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";
import NewsDetailsCard from "../components/NewsDetailsCard";

const NewsDetails = () => {
    const {data} = useLoaderData();
    console.log('details data',data)
    return (
        <div className="w-11/12 mx-auto">
            <header>
                <Header></Header>
            </header>
            <div className="grid grid-cols-12 gap-4">
                <main className="col-span-9">
                    {
                        data.map(data=><NewsDetailsCard key={data._id} data={data}></NewsDetailsCard>)
                    } 
                </main>
                <aside className="col-span-3">
                    <RightNav></RightNav>
                </aside>
            </div>
        </div>
    );
};

export default NewsDetails;