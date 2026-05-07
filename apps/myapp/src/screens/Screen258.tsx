import { Pressable, Text, View } from 'react-native';

import { copy258 } from '../generated/copy/copy258';
import { layout258 } from '../generated/layouts/layout258';
import { palette258 } from '../generated/palettes/palette258';

export function Screen258() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout258.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy258.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy258.detail} / {palette258.name}
			</Text>
		</View>
	);
}
