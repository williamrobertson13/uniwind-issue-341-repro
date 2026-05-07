import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy912 } from '../generated/copy/copy912';
import { layout912 } from '../generated/layouts/layout912';
import { palette912 } from '../generated/palettes/palette912';

const RuntimeView912 = withUniwind(View);

export function Screen912() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView912 styleClassName={layout912.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy912.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy912.detail} / {palette912.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
