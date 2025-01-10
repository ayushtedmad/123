import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const WYSIWYGEditor: React.FC<{ initialContent?: string; onSave: (content: string) => void }> = ({ initialContent = '', onSave }) => {
    const [content, setContent] = useState(initialContent);

    const handleEditorChange = (newContent: string) => {
        setContent(newContent);
    };

    const handleSave = () => {
        onSave(content);
    };

    return (
        <div className="editor-container">
            <Editor
                initialValue={initialContent}
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar:
                        'undo redo | styleselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code',
                }}
                onEditorChange={handleEditorChange}
            />
            <button onClick={handleSave} className="save-button">
                Save
            </button>
        </div>
    );
};

export default WYSIWYGEditor;