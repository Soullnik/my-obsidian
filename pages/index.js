import Layout from "../components/Layout";
import {
    getSinglePost,
    getDirectoryData,
    convertObject,
    getFlattenArray,
} from "../lib/utils";
import FolderTree from "../components/FolderTree";
import MDContent from "../components/MDContent";


export default function Home({content, tree, flattenNodes, backLinks}) {
    return (
        <Layout>
            <div className = 'container'>
                <nav className="nav-bar">
                    <FolderTree tree={tree} flattenNodes={flattenNodes}/>
                </nav>
                <MDContent content={content}  handleOpenNewContent={null} backLinks={backLinks}/>
            </div>
        </Layout>
    );

}
