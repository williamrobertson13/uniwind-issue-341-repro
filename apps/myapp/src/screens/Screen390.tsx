import { Pressable, Text, View } from 'react-native';

import { copy390 } from '../generated/copy/copy390';
import { layout390 } from '../generated/layouts/layout390';
import { palette390 } from '../generated/palettes/palette390';

export function Screen390() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout390.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy390.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy390.detail} / {palette390.name}
			</Text>
		</View>
	);
}
