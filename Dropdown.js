import React from 'react'


export default function Dropdown() {
    return (
        <div className="dropdown-center">
            <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Choose Folder
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item" href="/">Folder1</a></li>
                <li><a className="dropdown-item" href="/">Folder2</a></li>
                <li><a className="dropdown-item" href="/">Folder3</a></li>
                <li><a className="dropdown-item" href="/">Folder4</a></li>
                <li><a className="dropdown-item" href="/">Folder5</a></li>
                <li><a className="dropdown-item" href="/">Folder6</a></li>
            </ul>
        </div>
    )
}
