import { Pressable, Text, View } from 'react-native';

import { copy97 } from '../generated/copy/copy97';
import { layout97 } from '../generated/layouts/layout97';
import { palette97 } from '../generated/palettes/palette97';

export function Screen97() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout97.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy97.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy97.detail} / {palette97.name}
			</Text>
		</View>
	);
}
