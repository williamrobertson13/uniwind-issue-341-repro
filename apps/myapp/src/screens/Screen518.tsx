import { Pressable, Text, View } from 'react-native';

import { copy518 } from '../generated/copy/copy518';
import { layout518 } from '../generated/layouts/layout518';
import { palette518 } from '../generated/palettes/palette518';

export function Screen518() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout518.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy518.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy518.detail} / {palette518.name}
			</Text>
		</View>
	);
}
