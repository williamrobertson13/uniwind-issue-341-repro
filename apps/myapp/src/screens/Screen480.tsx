import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy480 } from '../generated/copy/copy480';
import { layout480 } from '../generated/layouts/layout480';
import { palette480 } from '../generated/palettes/palette480';

const RuntimeView480 = withUniwind(View);

export function Screen480() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView480 styleClassName={layout480.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy480.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy480.detail} / {palette480.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
