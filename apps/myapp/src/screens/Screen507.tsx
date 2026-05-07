import { Pressable, Text, View } from 'react-native';

import { copy507 } from '../generated/copy/copy507';
import { layout507 } from '../generated/layouts/layout507';
import { palette507 } from '../generated/palettes/palette507';

export function Screen507() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout507.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy507.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy507.detail} / {palette507.name}
			</Text>
		</View>
	);
}
