import { Pressable, Text, View } from 'react-native';

import { copy274 } from '../generated/copy/copy274';
import { layout274 } from '../generated/layouts/layout274';
import { palette274 } from '../generated/palettes/palette274';

export function Screen274() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout274.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy274.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy274.detail} / {palette274.name}
			</Text>
		</View>
	);
}
