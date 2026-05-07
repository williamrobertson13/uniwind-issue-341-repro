import { Pressable, Text, View } from 'react-native';

import { copy281 } from '../generated/copy/copy281';
import { layout281 } from '../generated/layouts/layout281';
import { palette281 } from '../generated/palettes/palette281';

export function Screen281() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout281.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy281.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy281.detail} / {palette281.name}
			</Text>
		</View>
	);
}
