import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addRandomUser } from "../api/users";

export const AddUserButton = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: addRandomUser,

    onSuccess: (createdUser) => {
      queryClient.setQueriesData({ queryKey: ["users"] }, (old = []) => [
        ...old,
        createdUser,
      ]);
    },

    onError: (_err, _vars, context) => {
      context.previousQueries.forEach(([key, data]) => {
        queryClient.setQueryData(key, data);
      });
    },
  });

  return (
    <button className="add-btn" onClick={() => mutate()} disabled={isPending}>
      {isPending ? "Adding..." : "Add Random User"}
    </button>
  );
};
