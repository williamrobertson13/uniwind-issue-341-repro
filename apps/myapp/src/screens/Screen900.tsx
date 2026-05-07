import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy900 } from '../generated/copy/copy900';
import { layout900 } from '../generated/layouts/layout900';
import { palette900 } from '../generated/palettes/palette900';

const RuntimeView900 = withUniwind(View);

export function Screen900() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView900 styleClassName={layout900.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy900.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy900.detail} / {palette900.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
