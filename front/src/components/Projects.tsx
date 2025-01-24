"use client"
import { useState } from 'react';

export const Projects = ({ description }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProjects, setFilteredProjects] = useState([]); // Si description es un solo proyecto

    const handleSearch = () => {
        // Filtrar los proyectos basados en el término de búsqueda
        if (searchTerm.trim() === '') {
            setFilteredProjects([description]); // Si no hay término de búsqueda, mostrar todo
        } else {
            const filtered = [description].filter(project =>
                project.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProjects(filtered); // Filtrar los proyectos
        }
    };

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <input
                    type="text"
                    className="p-2 border border-gray-300 rounded-md"
                    placeholder="Buscar proyecto..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    onClick={handleSearch}
                    className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Buscar
                </button>
            </div>

            {/* Mostrar los proyectos filtrados */}
            <div>
                {filteredProjects && filteredProjects.length > 0 ? (
                    filteredProjects.map((project, index) => (
                        <div key={index} className="p-4 mb-2 border border-gray-200 rounded-md">
                            <h1>{project}</h1>
                        </div>
                    ))
                ) : (
                    <p>No se encontraron proyectos.</p>
                )}
            </div>
        </div>
    );
};

export default Projects;
