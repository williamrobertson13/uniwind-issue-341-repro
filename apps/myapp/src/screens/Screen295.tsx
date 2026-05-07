import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy295 } from '../generated/copy/copy295';
import { layout295 } from '../generated/layouts/layout295';
import { palette295 } from '../generated/palettes/palette295';

const RuntimeView295 = withUniwind(View);

export function Screen295() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView295 styleClassName={layout295.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy295.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy295.detail} / {palette295.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
