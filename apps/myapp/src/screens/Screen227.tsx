import { Pressable, Text, View } from 'react-native';

import { copy227 } from '../generated/copy/copy227';
import { layout227 } from '../generated/layouts/layout227';
import { palette227 } from '../generated/palettes/palette227';

export function Screen227() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout227.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy227.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy227.detail} / {palette227.name}
			</Text>
		</View>
	);
}
