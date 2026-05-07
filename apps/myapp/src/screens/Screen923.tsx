import { Pressable, Text, View } from 'react-native';

import { copy923 } from '../generated/copy/copy923';
import { layout923 } from '../generated/layouts/layout923';
import { palette923 } from '../generated/palettes/palette923';

export function Screen923() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout923.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy923.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy923.detail} / {palette923.name}
			</Text>
		</View>
	);
}
