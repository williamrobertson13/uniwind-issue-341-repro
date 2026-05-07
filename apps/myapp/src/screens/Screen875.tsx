import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy875 } from '../generated/copy/copy875';
import { layout875 } from '../generated/layouts/layout875';
import { palette875 } from '../generated/palettes/palette875';

const RuntimeView875 = withUniwind(View);

export function Screen875() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView875 styleClassName={layout875.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy875.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy875.detail} / {palette875.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
