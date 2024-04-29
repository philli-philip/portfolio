import { createClient } from "../../../utils/supabase/client";

const supabase = createClient();

export const updateTodoAction = async (
  id: string,
  title: string,
  completed_at: string | null
) => {
  try {
    const { data, error } = await supabase
      .from("todos")
      .update({ completed_at: completed_at, title: title })
      .eq("id", id)
      .select();
    if (error) throw Error(error.message);
    return data;
  } catch (error) {
    throw error;
  }
};

export const createTodo = async (title: string) => {
  try {
    const { data, error } = await supabase
      .from("todos")
      .insert({ title: title })
      .select()
      .single();
    if (error) throw Error(error.message);
    return data;
  } catch (error) {
    throw error;
  }
};
