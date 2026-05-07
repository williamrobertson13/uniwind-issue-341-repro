import { Pressable, Text, View } from 'react-native';

import { copy370 } from '../generated/copy/copy370';
import { layout370 } from '../generated/layouts/layout370';
import { palette370 } from '../generated/palettes/palette370';

export function Screen370() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout370.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy370.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy370.detail} / {palette370.name}
			</Text>
		</View>
	);
}
