import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy864 } from '../generated/copy/copy864';
import { layout864 } from '../generated/layouts/layout864';
import { palette864 } from '../generated/palettes/palette864';

const RuntimeView864 = withUniwind(View);

export function Screen864() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView864 styleClassName={layout864.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy864.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy864.detail} / {palette864.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
