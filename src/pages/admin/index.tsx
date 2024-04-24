import { useEffect, type ReactElement, type ReactNode } from 'react'
import { NextPageWithLayout } from '../_app'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import dynamic from 'next/dynamic';



const AdminPage: NextPageWithLayout = () => {

    const Editor = dynamic(() => import("../../component/editor.component"), { ssr: false });
    return (
        <>
            <Editor
                value={"Foo"}
                onChange={(v: any) => console.log(v)}
            />
        </>
    )

}

AdminPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <div>
            {page}
        </div>
    )
}

export default AdminPage