import { Pressable, Text, View } from 'react-native';

import { copy833 } from '../generated/copy/copy833';
import { layout833 } from '../generated/layouts/layout833';
import { palette833 } from '../generated/palettes/palette833';

export function Screen833() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout833.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy833.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy833.detail} / {palette833.name}
			</Text>
		</View>
	);
}
