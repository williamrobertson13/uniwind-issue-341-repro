import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy83 } from '../generated/copy/copy83';
import { layout83 } from '../generated/layouts/layout83';
import { palette83 } from '../generated/palettes/palette83';

const RuntimeView83 = withUniwind(View);

export function Screen83() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView83 styleClassName={layout83.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy83.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy83.detail} / {palette83.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
