import { Pressable, Text, View } from 'react-native';

import { copy375 } from '../generated/copy/copy375';
import { layout375 } from '../generated/layouts/layout375';
import { palette375 } from '../generated/palettes/palette375';

export function Screen375() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout375.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy375.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy375.detail} / {palette375.name}
			</Text>
		</View>
	);
}
