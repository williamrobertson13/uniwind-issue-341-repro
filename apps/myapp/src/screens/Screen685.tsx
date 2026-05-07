import { Pressable, Text, View } from 'react-native';

import { copy685 } from '../generated/copy/copy685';
import { layout685 } from '../generated/layouts/layout685';
import { palette685 } from '../generated/palettes/palette685';

export function Screen685() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout685.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy685.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy685.detail} / {palette685.name}
			</Text>
		</View>
	);
}
