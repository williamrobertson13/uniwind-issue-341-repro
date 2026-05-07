import { Pressable, Text, View } from 'react-native';

import { copy459 } from '../generated/copy/copy459';
import { layout459 } from '../generated/layouts/layout459';
import { palette459 } from '../generated/palettes/palette459';

export function Screen459() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout459.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy459.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy459.detail} / {palette459.name}
			</Text>
		</View>
	);
}
