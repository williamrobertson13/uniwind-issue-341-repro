import { Pressable, Text, View } from 'react-native';

import { copy54 } from '../generated/copy/copy54';
import { layout54 } from '../generated/layouts/layout54';
import { palette54 } from '../generated/palettes/palette54';

export function Screen54() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout54.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy54.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy54.detail} / {palette54.name}
			</Text>
		</View>
	);
}
