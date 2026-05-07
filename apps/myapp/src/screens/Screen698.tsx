import { Pressable, Text, View } from 'react-native';

import { copy698 } from '../generated/copy/copy698';
import { layout698 } from '../generated/layouts/layout698';
import { palette698 } from '../generated/palettes/palette698';

export function Screen698() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout698.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy698.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy698.detail} / {palette698.name}
			</Text>
		</View>
	);
}
