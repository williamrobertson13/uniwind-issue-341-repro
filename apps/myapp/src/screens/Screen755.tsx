import { Pressable, Text, View } from 'react-native';

import { copy755 } from '../generated/copy/copy755';
import { layout755 } from '../generated/layouts/layout755';
import { palette755 } from '../generated/palettes/palette755';

export function Screen755() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout755.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy755.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy755.detail} / {palette755.name}
			</Text>
		</View>
	);
}
