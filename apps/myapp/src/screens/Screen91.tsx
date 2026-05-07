import { Pressable, Text, View } from 'react-native';

import { copy91 } from '../generated/copy/copy91';
import { layout91 } from '../generated/layouts/layout91';
import { palette91 } from '../generated/palettes/palette91';

export function Screen91() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout91.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy91.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy91.detail} / {palette91.name}
			</Text>
		</View>
	);
}
