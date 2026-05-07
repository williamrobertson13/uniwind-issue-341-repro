import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy741 } from '../generated/copy/copy741';
import { layout741 } from '../generated/layouts/layout741';
import { palette741 } from '../generated/palettes/palette741';

const RuntimeView741 = withUniwind(View);

export function Screen741() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView741 styleClassName={layout741.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy741.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy741.detail} / {palette741.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
