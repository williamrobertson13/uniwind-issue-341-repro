import { Pressable, Text, View } from 'react-native';

import { copy1218 } from '../generated/copy/copy1218';
import { layout1218 } from '../generated/layouts/layout1218';
import { palette1218 } from '../generated/palettes/palette1218';

export function Screen1218() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout1218.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy1218.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1218.detail} / {palette1218.name}
			</Text>
		</View>
	);
}
