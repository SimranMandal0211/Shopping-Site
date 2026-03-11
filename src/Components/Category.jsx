import { categoryDate } from '../assets/categoryData';

const Category = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-8">
            <div className="container mx-auto px-4 py-8">
                {categoryDate.map((card, index) => (
                    <div key={card.id} className="bg-white rounded-lg shadow-lg p-8 mb-6">
                        <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                            <div className="shrink-0 w-full md:w-auto flex justify-center md:justify-start">
                                <img src={card.imageUrl} alt={card.name} className="h-40 w-auto rounded-lg shadow-md hover:shadow-lg transition duration-300" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center md:text-left">{card.name}</h2>
                                <p className="text-gray-600 text-lg mb-6 text-center md:text-left">{card.description}</p>
                                <div className="flex justify-center md:justify-start">
                                    <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold cursor-pointer transition duration-200 shadow-md hover:shadow-lg hover:scale-105">{card.key}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Category;