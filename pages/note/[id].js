import Head from "next/head";
import Layout from "../../components/Layout";
import {
    getAllSlugs,
    getSinglePost,
    convertObject,
    getDirectoryData,
} from "../../lib/utils";
import FolderTree from "../../components/FolderTree";
import {getFlattenArray} from "../../lib/utils";
import MDContent from "../../components/MDContent";

export default function Home({note, backLinks, fileNames, tree, flattenNodes}) {

    return (
        <Layout>
            <Head>
                {note.title && <meta name="title" content={note.title}/>}
            </Head>
            <div className='container'>
                <nav className="nav-bar">
                    <FolderTree tree={tree} flattenNodes={flattenNodes}/>
                </nav>
                <MDContent content={note.data} fileNames={fileNames} handleOpenNewContent={null} backLinks={backLinks}/>
            </div>
        </Layout>
    );
}