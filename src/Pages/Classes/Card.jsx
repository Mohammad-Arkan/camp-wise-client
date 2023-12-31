import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import useInstructor from "../../hooks/useInstructor";
import { useAdmin } from "../../hooks/useAdmin";

const Card = ({ clas }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isInstructor] = useInstructor();
    const [isAdmin] = useAdmin();


    const { data: selectedClasses=[], refetch } = useQuery({
        queryKey: ['selected'],
        enabled: !!user,
        queryFn: async () => {
            
            const selectedClasses = await axios(`https://camp-wise-server.vercel.app/selected-class?email=${user.email}`);

            

            return selectedClasses.data;
        }
    })


    const exist = selectedClasses.find(select=> select.classId == clas._id);

   




    const handleSelectButton = () => {
        if (!user) {
            Swal.fire({
                title: 'Login before selecting the class',

                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
              return
        }

        const selectedClass = {
            studentName: user.displayName,
            studentEmail: user.email,
            date: new Date,
            instructorName: clas.name,
            instructorEmail: clas.email,
            className: clas.className,
            availableSeats: clas.availableSeats,
            price: clas.price,
            classImage: clas.classImage,
            classId: clas._id

        }


        axios.post(`https://camp-wise-server.vercel.app/selected-classes`, selectedClass)
            .then(res => {
                console.log(res.data);
                if (res.data.acknowledged == true) {
                    toast.success(`successfully selected ${clas.className}`)
                    refetch()
                }
            })


    }





    return (
        <div className={`${clas.availableSeats == 0 && "bg-red-600 dark:bg-red-600"} card w-96 bg-base-100 dark:bg-transparent dark:border border shadow-xl`}>
            <figure className="h-64">
                <img src={clas.classImage} alt="profile" className="object-cover w-full" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{clas.className}</h2>
                <p>Instructor: {clas.name}</p>
                <p>Available seats: {clas.availableSeats}</p>
                <p>Students: {clas.students}</p>
                <p>Fee: ${clas.price}</p>
                <div className="card-actions justify-end">


                    <button
                     onClick={handleSelectButton} 
                     disabled={clas.availableSeats == 0 || exist || isInstructor || isAdmin} className="btn btn-sm dark:bg-slate-200">Select</button>


                </div>


            </div>
        </div>
    );
};

export default Card;