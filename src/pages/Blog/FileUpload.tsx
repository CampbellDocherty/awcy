import { SyntheticEvent, useState } from 'react';
import { FirebaseStorageContent, uploadFile } from '../../firebase/storage';
import { Form } from '../../styles/fileUpload.styles';
import { Plus } from '../../styles/main.styles';
import plus from '../../assets/plus.svg';

export const FileUpload = ({
  onUpload,
}: {
  onUpload: (file: FirebaseStorageContent) => void;
}) => {
  const [addContent, setAddContent] = useState(false);
  const [caption, setCaption] = useState('');
  const [name, setName] = useState('');

  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (file) {
      const content = await uploadFile(file, { name, caption });
      onUpload(content);
      setFile(null);
      setCaption('');
      setName('');
      setAddContent(false);
    }
  };

  return (
    <>
      <Plus
        onClick={() => setAddContent(!addContent)}
        src={plus}
        alt="Add more content"
      />
      {addContent && (
        <>
          <Form onSubmit={handleUpload}>
            <div>
              <label htmlFor="caption">Caption</label>
            </div>
            <div>
              <input
                id="caption"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
              />
              <div>
                <label htmlFor="name">Name</label>
              </div>
              <div>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="file">Choose a file</label>
            </div>
            <div>
              <input
                id="file"
                type="file"
                required
                onChange={handleFileChange}
              />
            </div>
            {file && <button type="submit">Upload a file</button>}
          </Form>
        </>
      )}
    </>
  );
};
