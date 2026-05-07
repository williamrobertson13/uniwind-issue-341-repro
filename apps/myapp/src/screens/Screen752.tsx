import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy752 } from '../generated/copy/copy752';
import { layout752 } from '../generated/layouts/layout752';
import { palette752 } from '../generated/palettes/palette752';

const RuntimeView752 = withUniwind(View);

export function Screen752() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView752 styleClassName={layout752.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy752.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy752.detail} / {palette752.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
