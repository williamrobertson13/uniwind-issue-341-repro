import { Pressable, Text, View } from 'react-native';

import { copy584 } from '../generated/copy/copy584';
import { layout584 } from '../generated/layouts/layout584';
import { palette584 } from '../generated/palettes/palette584';

export function Screen584() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout584.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy584.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy584.detail} / {palette584.name}
			</Text>
		</View>
	);
}
