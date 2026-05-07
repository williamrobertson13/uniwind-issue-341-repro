import { Pressable, Text, View } from 'react-native';

import { copy1062 } from '../generated/copy/copy1062';
import { layout1062 } from '../generated/layouts/layout1062';
import { palette1062 } from '../generated/palettes/palette1062';

export function Screen1062() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout1062.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy1062.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1062.detail} / {palette1062.name}
			</Text>
		</View>
	);
}
